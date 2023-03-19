type greetProps = {
  name?: string
}
export default function greet(props: greetProps) {
  return (
    <div>Hello{props.name ? props.name : 'Guest'}</div>
  )
}
