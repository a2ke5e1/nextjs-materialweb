"use client";

import {
  ElevatedButton,
  FilledButton,
  FilledIconButton,
  FilledTonalButton,
  FilledTonalIconButton,
  IconButton,
  OutlinedButton,
  OutlinedIconButton,
  TextButton,
} from "@/components/button/button";
import { Checkbox } from "@/components/checkbox/checkbox";
import { Dialog } from "@/components/dialog/dialog";
import { Fab } from "@/components/fab/fab";
import { Icon } from "@/components/icon/icon";
import { MdCheckbox } from "@material/web/checkbox/checkbox";
import { MdDialog } from "@material/web/dialog/dialog";
import { useRef } from "react";

export default function Home() {
  const dialogRef = useRef<MdDialog>(null);

  const openDialog = () => {
    dialogRef.current?.show();
  };

  const closeDialog = (e: any) => {
    dialogRef.current?.close();
    console.log(e.target.value);
  };

  // Don't use this method to inject text styles from the design system
  //
  // useEffect(() => {
  //   if (typeof document !== 'undefined') {
  //     const styleElement = document.createElement('style');
  //     console.log(typescaleStyles.cssText);
  //     var styleText = typescaleStyles.cssText;

  //     styleText = styleText.replace("@layer{", "")

  //     styleElement.textContent = styleText;
  //     document.head.appendChild(styleElement);
  //   }
  // }, []);

  return (
    <>
      <h2 className="text-center text-on-primary bg-primary-container p-8 m-2 rounded-xl text-display-small">
        Next.js + Material Web 
      </h2>
      <div className="grid grid-flow-row grid-cols-2 gap-2 m-2">
        <Fab size="medium">
          <Icon slot="icon">edit</Icon>
        </Fab>

        <div className="flex flex-row gap-2 h-fit">
          <IconButton>
            <Icon>add</Icon>
          </IconButton>
          <FilledIconButton>
            <Icon>add</Icon>
          </FilledIconButton>
          <FilledTonalIconButton>
            <Icon>add</Icon>
          </FilledTonalIconButton>
          <OutlinedIconButton>
            <Icon>add</Icon>
          </OutlinedIconButton>
        </div>

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
        <TextButton onClick={openDialog}>Open</TextButton>
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

        <div className="flex flex-row gap-2 items-center text-center">
          <Checkbox id="checkbox-two" touch-target="wrapper"></Checkbox>
          <label htmlFor="checkbox-two">Checkbox two</label>

          <Checkbox disabled></Checkbox>
          <Checkbox checked></Checkbox>
          <Checkbox indeterminate></Checkbox>
        </div>

        <Dialog ref={dialogRef}>
          <div slot="headline">Dialog title</div>
          <form slot="content" method="dialog">
            A simple dialog with free-form content.
          </form>
          <div slot="actions">
            <TextButton onClick={closeDialog} value="cancel">
              Cancel
            </TextButton>
            <TextButton onClick={closeDialog} value="ok">
              Ok
            </TextButton>
          </div>
        </Dialog>
      </div>
    </>
  );
}
