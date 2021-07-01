import { Button } from './Button.styled';

async function onClickToBtn(callback) {
  const res = await callback();

  if (res) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
}
export default function ButtonLoadMore({ onClick }) {
  return (
    <>
      <Button type="button" onClick={() => onClickToBtn(onClick)}>
        Load more
      </Button>
    </>
  );
}
