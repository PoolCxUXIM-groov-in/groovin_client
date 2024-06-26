interface MainButtonInterface {
  light: boolean;
  text: string;
  width: 'lg' | 'md' | 'sm';
  action: () => void;
  option?: any;
}

export default function MainButton({
  light,
  text,
  width,
  action,
  option,
}: MainButtonInterface) {
  const color = light
    ? ' bg-[#F5FFFA] text-[#54D99B] border-2 border-[#54D99B]'
    : 'bg-[#28b070] text-white';
  const customWidth =
    `` +
    (() => {
      if (width === 'lg') return '194';
      else if (width === 'md') return '128';
      else return '100';
    })() +
    'px';
  console.log(customWidth);
  return (
    <button
      type="button"
      {...option}
      onClick={() => {
        action();
      }}
      style={{ width: customWidth }}
      className={`${color} rounded-md  h-[56px]`}
    >
      {text}{' '}
    </button>
  );
}
