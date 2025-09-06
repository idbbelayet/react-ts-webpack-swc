import * as React from 'react';
import { Combobox, Option, makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    ...shorthands.padding('20px'),
    maxWidth: '300px',
  },
});

type Item = {
  key: string;
  text: string;
};

const items: Item[] = [
  { key: 'bd', text: 'Bangladesh' },
  { key: 'in', text: 'India' },
  { key: 'pk', text: 'Pakistan' },
  { key: 'np', text: 'Nepal' },
  { key: 'lk', text: 'Sri Lanka' },
  { key: 'mv', text: 'Maldives' },
];

export default function DropdownFiled() {
  const styles = useStyles();
  const [query, setQuery] = React.useState('');
  const [filteredItems, setFilteredItems] = React.useState<Item[]>(items);

  const onInputChange = (_: unknown, data: { value: string }) => {
    setQuery(data.value);
    if (!data.value) {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter((item) => item.text.toLowerCase().includes(data.value.toLowerCase())),
      );
    }
  };

  return (
    <div className={styles.root}>
      <Combobox placeholder="Search country..." onChange={onInputChange} value={query}>
        {filteredItems.map((item) => (
          <Option key={item.key} value={item.text}>
            {item.text}
          </Option>
        ))}
      </Combobox>
    </div>
  );
}
