import React, { FC, useCallback, useMemo } from 'react';
import { JettonProps } from './Jetton.interface';
import * as S from './Jetton.style';
import {
  Button,
  Icon,
  ScrollHandler,
  Text,
  PopupMenu,
  PopupMenuItem,
  IconButton,
  Skeleton,
} from '$uikit';
import { delay, maskifyTonAddress, ns } from '$utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useJetton } from '$hooks/useJetton';
import { useTheme, useTranslator } from '$hooks';
import { openDAppBrowser, openReceive, openSend } from '$navigation';
import { CryptoCurrencies, getServerConfig, Opacity } from '$shared/constants';
import { useSelector } from 'react-redux';
import { useJettonEvents } from '$hooks/useJettonEvents';
import { TransactionsList } from '$core/Balances/TransactionsList/TransactionsList';
import { Linking, RefreshControl } from 'react-native';
import { walletAddressSelector } from '$store/wallet';
import { useJettonPrice } from '$hooks/useJettonPrice';
import { formatter } from '$utils/formatter';

export const Jetton: React.FC<JettonProps> = ({ route }) => {
  const theme = useTheme();
  const { bottom: bottomInset } = useSafeAreaInsets();
  const jetton = useJetton(route.params.jettonAddress);
  const t = useTranslator();
  const { events, isRefreshing, isLoading, refreshJettonEvents } = useJettonEvents(
    jetton.jettonAddress,
  );
  const address = useSelector(walletAddressSelector);
  const { price, total } = useJettonPrice(jetton.jettonAddress, jetton.balance);

  const handleSend = useCallback(() => {
    openSend(jetton.jettonAddress, undefined, undefined, undefined, true);
  }, [jetton.jettonAddress]);

  const handleReceive = useCallback(() => {
    openReceive(CryptoCurrencies.Ton, true, jetton.jettonAddress);
  }, [jetton.jettonAddress]);


  const handleOpenExplorer = useCallback(async () => {
    await delay(200);
    openDAppBrowser(
      getServerConfig('accountExplorer').replace('%s', address.ton) + `/jetton/${jetton.jettonAddress}`,
    );
    }, [address.ton, jetton.jettonAddress]);

  const renderHeader = useMemo(() => {
    if (!jetton) {
      return null;
    }
    return (
      <S.HeaderWrap>
        <S.FlexRow>
          <S.JettonAmountWrapper>
            <Text variant="h2">
              {formatter.format(jetton.balance, {
                decimals: jetton.metadata.decimals,
                currency: jetton.metadata.symbol,
                currencySeparator: 'wide',
              })}
            </Text>
            <Text style={{ marginTop: 2 }} variant="body2" color="foregroundSecondary">
              {total || t('jetton_token')}
            </Text>
            {price ? (
              <Text style={{ marginTop: 12 }} variant="body2" color="foregroundSecondary">
                {t('jetton_price')} {price}
              </Text>
            ) : null}
          </S.JettonAmountWrapper>
          {jetton.metadata.image ? (
            <S.Logo source={{ uri: jetton.metadata.image }} />
          ) : null}
        </S.FlexRow>
        <S.Divider style={{ marginBottom: ns(16) }} />
        <S.ActionsContainer>
          <IconButton
            onPress={handleSend}
            iconName="ic-arrow-up-28"
            title={t('wallet.send_btn')}
          />
          <IconButton
            onPress={handleReceive}
            iconName="ic-arrow-down-28"
            title={t('wallet.receive_btn')}
          />
        </S.ActionsContainer>
        <S.Divider style={{ marginBottom: 10 }} />
      </S.HeaderWrap>
    );
  }, [jetton, total, price, t, handleSend, handleReceive]);

  const renderFooter = useCallback(() => {
    if (Object.values(events).length === 0 && isLoading) {
      return <Skeleton.List />;
    }
    return null;
  }, [events, isLoading]);

  const renderContent = useCallback(() => {
    return (
      <TransactionsList
        refreshControl={
          <RefreshControl
            onRefresh={refreshJettonEvents}
            refreshing={isRefreshing}
            tintColor={theme.colors.foregroundPrimary}
          />
        }
        withoutMarginForFirstHeader
        eventsInfo={events}
        initialData={[]}
        renderHeader={renderHeader}
        contentContainerStyle={{
          paddingHorizontal: ns(16),
          paddingBottom: bottomInset,
        }}
        renderFooter={renderFooter}
      />
    );
  }, [
    renderFooter,
    refreshJettonEvents,
    isRefreshing,
    events,
    renderHeader,
    bottomInset,
    theme.colors.foregroundPrimary,
  ]);

  if (!jetton) {
    return null;
  }

  return (
    <S.Wrap>
      <S.ContentWrap>
        <ScrollHandler
          navBarRight={
            <PopupMenu
              items={[
                <PopupMenuItem
                  shouldCloseMenu
                  onPress={handleOpenExplorer}
                  text={t('jetton_open_explorer')}
                  icon={<Icon name="ic-globe-16" color="accentPrimary" />}
                />,
              ]}
            >
              <S.HeaderViewDetailsButton onPress={() => null}>
                <Icon name="ic-ellipsis-16" color="foregroundPrimary" />
              </S.HeaderViewDetailsButton>
            </PopupMenu>
          }
          titleProps={{ numberOfLines: 1 }}
          isLargeNavBar={false}
          navBarTitle={jetton.metadata?.name || maskifyTonAddress(jetton.jettonAddress)}
        >
          {renderContent()}
        </ScrollHandler>
      </S.ContentWrap>
    </S.Wrap>
  );
};
