interface DisplayProps {
  children: any;
}
export default function Display({ children }: DisplayProps) {
  return <div>{children}</div>;
}
