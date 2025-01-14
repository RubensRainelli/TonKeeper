import { useFiatValue } from '$hooks';
import { CryptoCurrencies } from '$shared/constants';
import { Steezy } from '$styles';
import { Icon, Separator, View } from '$uikit';
import { stakingFormatter } from '$utils/formatter';
import React, { FC, memo, useCallback } from 'react';
import { ImageRequireSource } from 'react-native';
import { Source } from 'react-native-fast-image';
import * as S from './StakingListCell.style';

interface Props {
  id: string;
  name: string;
  description?: string;
  balance?: string;
  iconSource?: Source | ImageRequireSource | null;
  separator?: boolean;
  isWidget?: boolean;
  numberOfLines?: number;
  onPress?: (id: string) => void;
}

const StakingListCellComponent: FC<Props> = (props) => {
  const {
    name,
    description,
    balance: balanceValue,
    iconSource,
    separator,
    id,
    isWidget,
    numberOfLines,
    onPress,
  } = props;

  const balance = useFiatValue(CryptoCurrencies.Ton, balanceValue || '0');

  const handlePress = useCallback(() => {
    onPress?.(id);
  }, [id, onPress]);

  return (
    <>
      <S.CellContainer>
        <S.Cell background="backgroundTertiary" onPress={handlePress}>
          <S.Container>
            <View style={[styles.iconContainer, isWidget && styles.widgetIconContainer]}>
              {iconSource ? (
                <S.Icon source={iconSource} />
              ) : (
                <Icon
                  name="ic-staking-28"
                  color={isWidget ? 'foregroundPrimary' : 'iconSecondary'}
                />
              )}
            </View>
            <S.Content>
              <S.Title>{name}</S.Title>
              <S.SubTitle numberOfLines={numberOfLines ?? 2}>{description}</S.SubTitle>
            </S.Content>
            <S.RightContainer>
              {balanceValue ? (
                <>
                  <S.Title textAlign="right">
                    {stakingFormatter.format(balanceValue, { decimals: 2 })} TON
                  </S.Title>
                  <S.SubTitle textAlign="right">{balance.fiatInfo.amount}</S.SubTitle>
                </>
              ) : (
                <Icon name="ic-chevron-right-16" />
              )}
            </S.RightContainer>
          </S.Container>
        </S.Cell>
      </S.CellContainer>
      {separator ? <Separator /> : null}
    </>
  );
};

export const StakingListCell = memo(StakingListCellComponent);

const styles = Steezy.create(({ colors }) => ({
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundContentTint,
    marginRight: 16,
    overflow: 'hidden',
  },
  widgetIconContainer: {
    backgroundColor: colors.accentGreen,
  },
}));
