import { ArrowUpRight } from 'lucide-react';
import { default as NextLink } from 'next/link';
import { ComponentProps, memo } from 'react';
import { cn } from 'utils/misc';

interface Props extends ComponentProps<typeof NextLink> {
  underlineClassName?: string;
}

export const Link = memo(({ className, children, underlineClassName, ...props }: Props) => {
  return (
    <NextLink className={cn('group inline-block transition-all duration-300 hover:-rotate-3', className)} {...props}>
      {children}
      <span
        className={cn(
          'block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-black',
          underlineClassName,
        )}
      />
    </NextLink>
  );
});

interface LinkButtonProps extends Partial<ComponentProps<typeof NextLink>> {
  linkClassName?: string;
  highlight?: string;
}

export const LinkButton = memo(({ className, children, linkClassName, href, highlight, ...props }: LinkButtonProps) => {
  const content = (
    <button
      className={cn('p-2 rounded-full overflow-hidden relative text-black ml-5 group', className)}
      style={{ background: 'linear-gradient(180deg, #FBFBFB 0%, #D5D5D5 100%)' }}
    >
      <span
        className="absolute w-full h-full bg-blue-500 top-0 left-0 pointer-events-none transition-all -translate-x-full group-hover:translate-x-0"
        style={highlight ? { backgroundColor: highlight } : undefined}
      />
      <ArrowUpRight size={24} className="relative transition-all group-hover:rotate-[45deg] group-hover:text-white" />
    </button>
  );

  return href ? (
    <NextLink className={cn(linkClassName)} href={href} {...props}>
      {content}
    </NextLink>
  ) : (
    content
  );
});
