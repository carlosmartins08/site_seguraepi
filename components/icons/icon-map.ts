import {
  AlertTriangle,
  Anchor,
  ArrowRight,
  Award,
  BadgeCheck,
  Box,
  Boxes,
  Briefcase,
  Camera,
  CheckCircle,
  ClipboardCheck,
  Clock,
  Database,
  Ear,
  Factory,
  FileSearch,
  FileSignature,
  FlaskConical,
  Glasses,
  Hammer,
  Hand,
  HardHat,
  HeartPulse,
  Footprints,
  LayoutGrid,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  RefreshCw,
  Search,
  ShieldAlert,
  ShieldCheck,
  Shirt,
  Sparkles,
  Truck,
  UserCog,
  Users,
  VenetianMask,
  Wrench,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type IconName =
  | 'shield-check'
  | 'certificate'
  | 'clipboard-check'
  | 'user-gear'
  | 'truck-fast'
  | 'chat'
  | 'search'
  | 'grid'
  | 'whatsapp'
  | 'file-quote'
  | 'flask'
  | 'arrow-right'
  | 'spark'
  | 'document-search'
  | 'shield-alert'
  | 'check-circle'
  | 'warning-triangle'
  | 'database'
  | 'tool'
  | 'helmet'
  | 'glasses'
  | 'ear'
  | 'mask'
  | 'glove'
  | 'shirt'
  | 'boot'
  | 'harness'
  | 'construction'
  | 'industry'
  | 'energy'
  | 'health'
  | 'logistics'
  | 'clock'
  | 'box'
  | 'map-pin'
  | 'check-badge'
  | 'refresh'
  | 'phone'
  | 'mail'
  | 'instagram'
  | 'linkedin'
  | 'facebook'
  | 'youtube';

export const ICON_MAP: Record<IconName, LucideIcon> = {
  'shield-check': ShieldCheck,
  certificate: Award,
  'clipboard-check': ClipboardCheck,
  'user-gear': UserCog,
  'truck-fast': Truck,
  chat: MessageCircle,
  search: Search,
  grid: LayoutGrid,
  whatsapp: MessageCircle,
  'file-quote': FileSignature,
  flask: FlaskConical,
  'arrow-right': ArrowRight,
  spark: Sparkles,
  'document-search': FileSearch,
  'shield-alert': ShieldAlert,
  'check-circle': CheckCircle,
  'warning-triangle': AlertTriangle,
  database: Database,
  tool: Wrench,
  helmet: HardHat,
  glasses: Glasses,
  ear: Ear,
  mask: VenetianMask,
  glove: Hand,
  shirt: Shirt,
  boot: Footprints,
  harness: Anchor,
  construction: Hammer,
  industry: Factory,
  energy: Zap,
  health: HeartPulse,
  logistics: Boxes,
  clock: Clock,
  box: Box,
  'map-pin': MapPin,
  'check-badge': BadgeCheck,
  refresh: RefreshCw,
  phone: Phone,
  mail: Mail,
  instagram: Camera,
  linkedin: Briefcase,
  facebook: Users,
  youtube: Play,
};
