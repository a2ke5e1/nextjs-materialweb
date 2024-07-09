"use client";

import React, { useRef, useEffect } from "react";

// Common props shared across all button types
interface ButtonCommonProps extends React.HTMLAttributes<HTMLElement> {
  disabled?: boolean;
  href?: string;
  target?: string;
  trailingIcon?: boolean;
  hasIcon?: boolean;
  type?: "button" | "reset" | "submit";
  value?: string;
  name?: string;
  form?: string;
}

// ButtonComponent props with 'variant' removed from ButtonProps type
interface ButtonComponentProps extends ButtonCommonProps {
  variant: "elevated" | "filled" | "filled-tonal" | "outlined" | "text";
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  variant,
  disabled = false,
  href = "",
  target = "",
  trailingIcon = false,
  hasIcon = false,
  type = "submit",
  value = "",
  name,
  form,
  children,
  ...props
}) => {
  const buttonRef = useRef<HTMLElement>(null);

  useEffect(() => {
    defineCustomElements(`${variant}-button`);
  }, [variant]);

  useEffect(() => {
    // Attribute handling remains the same
    if (buttonRef.current) {
      // Set/Remove attributes based on props
      if (disabled) {
        buttonRef.current.setAttribute("disabled", "");
      } else {
        buttonRef.current.removeAttribute("disabled");
      }

      if (href) {
        buttonRef.current.setAttribute("href", href);
      } else {
        buttonRef.current.removeAttribute("href");
      }

      if (target) {
        buttonRef.current.setAttribute("target", target);
      } else {
        buttonRef.current.removeAttribute("target");
      }

      if (trailingIcon) {
        buttonRef.current.setAttribute("trailing-icon", "");
      } else {
        buttonRef.current.removeAttribute("trailing-icon");
      }

      if (hasIcon) {
        buttonRef.current.setAttribute("has-icon", "");
      } else {
        buttonRef.current.removeAttribute("has-icon");
      }

      if (type) {
        buttonRef.current.setAttribute("type", type);
      } else {
        buttonRef.current.removeAttribute("type");
      }

      if (value) {
        buttonRef.current.setAttribute("value", value);
      } else {
        buttonRef.current.removeAttribute("value");
      }

      if (name) {
        buttonRef.current.setAttribute("name", name);
      } else {
        buttonRef.current.removeAttribute("name");
      }

      if (form) {
        buttonRef.current.setAttribute("form", form);
      } else {
        buttonRef.current.removeAttribute("form");
      }
    }
  }, [disabled, href, target, trailingIcon, hasIcon, type, value, name, form]);

  return React.createElement(
    `md-${variant}-button`,
    { ref: buttonRef, ...props },
    children
  );
};

export function ElevatedButton(props: ButtonCommonProps) {
  return <ButtonComponent {...props} variant="elevated" />;
}

export function FilledButton(props: ButtonCommonProps) {
  return <ButtonComponent {...props} variant="filled" />;
}

export function FilledTonalButton(props: ButtonCommonProps) {
  return <ButtonComponent {...props} variant="filled-tonal" />;
}

export function OutlinedButton(props: ButtonCommonProps) {
  return <ButtonComponent {...props} variant="outlined" />;
}

export function TextButton(props: ButtonCommonProps) {
  return <ButtonComponent {...props} variant="text" />;
}

// Function to dynamically load custom elements
const defineCustomElements = async (elementName: string) => {
  if (!customElements.get(elementName)) {
    await import(`@material/web/button/${elementName}.js`);
  }
};
