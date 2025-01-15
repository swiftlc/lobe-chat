import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

import ServerLayout from '@/components/server/ServerLayout';
import { serverFeatureFlags } from '@/config/featureFlags';
import { DynamicLayoutProps } from '@/types/next';

import Desktop from './_layout/Desktop';
import Mobile from './_layout/Mobile';

const SessionSettingsLayout = ServerLayout({ Desktop, Mobile });

interface SessionSettingsLayoutProps extends DynamicLayoutProps {
  children: ReactNode;
}

const Layout = (props: SessionSettingsLayoutProps) => {
  const isAgentEditable = serverFeatureFlags().isAgentEditable;
  if (!isAgentEditable) return notFound();

  return <SessionSettingsLayout {...props} />;
};

Layout.displayName = 'SessionSettingsLayout';

export default Layout;
