import { Button, Text } from '@radix-ui/themes';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div>Hello world</div>
      <Button>Button</Button>
      <Text color="gray"> Buy fresh vegetables and fruits online </Text>
    </>
  );
}
