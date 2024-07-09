"use client";

import React from "react";
import { createComponent } from "@lit/react";
import { MdElevatedButton } from "@material/web/button/elevated-button";
import { MdFilledButton } from "@material/web/button/filled-button";
import { MdFilledTonalButton } from "@material/web/button/filled-tonal-button";
import { MdOutlinedButton } from "@material/web/button/outlined-button";
import { MdTextButton } from "@material/web/button/text-button";
import { MdIconButton } from "@material/web/iconbutton/icon-button";

export const ElevatedButton = createComponent({
  tagName: "md-elevated-button",
  elementClass: MdElevatedButton,
  react: React,
});

export const FilledButton = createComponent({
  tagName: "md-filled-button",
  elementClass: MdFilledButton,
  react: React,
});

export const FilledTonalButton = createComponent({
  tagName: "md-filled-tonal-button",
  elementClass: MdFilledTonalButton,
  react: React,
});

export const OutlinedButton = createComponent({
  tagName: "md-outlined-button",
  elementClass: MdOutlinedButton,
  react: React,
});

export const TextButton = createComponent({
  tagName: "md-text-button",
  elementClass: MdTextButton,
  react: React,
});


export const IconButton = createComponent({
  tagName: "md-icon-button",
  elementClass: MdIconButton,
  react: React,
});