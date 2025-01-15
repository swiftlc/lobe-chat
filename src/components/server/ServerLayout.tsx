import { FC, PropsWithChildren, ReactNode } from 'react';

import { RouteVariants } from '@/utils/server/routeVariants';

interface ServerLayoutProps<T> {
  Desktop: FC<T>;
  Mobile: FC<T>;
}

interface ServerLayoutInnerProps {
  children: ReactNode;
  params: Promise<{ variants: string }>;
}

const ServerLayout =
  <T extends PropsWithChildren>({ Desktop, Mobile }: ServerLayoutProps<T>): FC<T> =>
  // @ts-expect-error
  async (props: ServerLayoutInnerProps) => {
    const { params, ...res } = props;
    const { variants } = (await params) || {};

    const { isMobile } = RouteVariants.deserializeVariants(variants);
    return isMobile ? <Mobile {...(res as T)} /> : <Desktop {...(res as T)} />;
  };

ServerLayout.displayName = 'ServerLayout';

export default ServerLayout;
