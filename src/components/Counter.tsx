import React, { useState } from 'react';
import { Stack, IStackTokens } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

function Counter() {
  const [count, setCount] = useState<number>(0);

  const handleIncreament = () => {
    setCount(count + 1);
  };

  const handleDecreament = () => {
    setCount(count - 1);
  };
  return (
    <div className="mt-5">
      <div className="text-xl font-semibold">Total Click : {count}</div>
      <Stack
        horizontal
        horizontalAlign="center"
        tokens={{ childrenGap: 20 } as IStackTokens}
        className="mt-5"
      >
        <DefaultButton className="ms-Button" text="Increament" onClick={handleIncreament} />
        <PrimaryButton text="Decreament" onClick={handleDecreament} />
      </Stack>
    </div>
  );
}

export default Counter;
