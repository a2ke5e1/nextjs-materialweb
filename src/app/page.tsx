import {
  ElevatedButton,
  FilledButton,
  FilledTonalButton,
  IconButton,
  OutlinedButton,
  TextButton,
} from "@/components/button/button";
import { Fab } from "@/components/fab/fab";
import { Icon } from "@/components/icon/icon";


export default function Home() {
  return (
    <div className="grid grid-flow-row grid-cols-2 gap-2 m-2">
      <Fab size="large">
        <Icon slot="icon">edit</Icon>
      </Fab>
      
      <IconButton>
        <Icon>add</Icon>
      </IconButton>

      <FilledButton>
        Click me
        <svg slot="icon" viewBox="0 0 48 48">
          <path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" />
        </svg>
      </FilledButton>
      <FilledTonalButton>
        Click me
        <svg slot="icon" viewBox="0 0 48 48">
          <path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" />
        </svg>
      </FilledTonalButton>
      <TextButton>
        Click me
        <svg slot="icon" viewBox="0 0 48 48">
          <path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" />
        </svg>
      </TextButton>
      <OutlinedButton href="https://a3group.co.in">
        Click me
        <svg slot="icon" viewBox="0 0 48 48">
          <path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" />
        </svg>
      </OutlinedButton>
      <ElevatedButton disabled>
        Click me
        <svg slot="icon" viewBox="0 0 48 48">
          <path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" />
        </svg>
      </ElevatedButton>
    </div>
  );
}
