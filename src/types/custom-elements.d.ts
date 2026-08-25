declare namespace JSX {
  interface IntrinsicElements {
    "model-embed": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      src?: string;
      alt?: string;
    };
  }
}
