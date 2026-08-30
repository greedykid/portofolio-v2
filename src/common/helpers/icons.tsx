import { ReactNode } from 'react';
import {
  FiLayout,
  FiCode,
  FiCpu,
  FiServer,
  FiCloud,
} from 'react-icons/fi';

const ICON_MAP: Record<string, ReactNode> = {
  layout: <FiLayout size={20} />,
  code: <FiCode size={20} />,
  cpu: <FiCpu size={20} />,
  server: <FiServer size={20} />,
  cloud: <FiCloud size={20} />,
};

export const getIcon = (name: string): ReactNode => ICON_MAP[name] ?? <FiCode size={20} />;
