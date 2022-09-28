import React from 'react';
import Icon from '@mdi/react';
import { mdiCurrencyUsd, mdiCurrencyUsdOff, mdiHomeCurrencyUsd } from '@mdi/js';
import classNames from 'classnames';

import './CurrencyFormat.scss';

const currenyCodeIconMap = {
  USD: mdiCurrencyUsd,
};

const currencyCodeLocaleMap = {
  USD: 'en-US',
};

function CurrencyFormat({
  className,
  value,
  currencyCode,
  iconSize = 1,
  ...remainingProps
}) {
  return (
    <div
      className={classNames('currency-format', { [className]: className })}
      {...remainingProps}
    >
      <Icon size={iconSize} path={currenyCodeIconMap[currencyCode]} />
      <span className="currency-format__value">
        {value.toLocaleString(currencyCodeLocaleMap[currencyCode])}
      </span>
    </div>
  );
}

export default CurrencyFormat;
