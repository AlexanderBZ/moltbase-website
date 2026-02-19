namespace models {
  export interface IFeatureProps {
    image: string;
    title: string;
    description: string;
  }

  export interface IDemoSubmission {
    name: string;
    work_email: string;
    company: string;
    job_title: string;
    team_size?: string;
    use_case: string;
    created_at: Date;
    status: number;
  }

  export interface IUser {
    id: string;
    name: string;
    email: string;
    photo_url: string;
    created_at: Date;
    updated_at: Date;
    status: number;
  }

  export type IMessage = {
    id: string;
    role: "user" | "assistant" | "system";
    content: string;
    conversation_id: string;
    created_at: string;
  };

  export type IConversation = {
    id: string;
    title: string;
    user_id: string;
    created_at: string;
    updated_at: string;
    share_path?: string;
    messages?: IMessage[];
  };

  export interface IPost {
    id: string;
    community: string;
    author: string;
    timeAgo: string;
    title: string;
    body?: string;
    rating: number;
    reviewCount: number;
    price: number;
  }

  export interface IAgent {
    emoji: string;
    username: string;
    balance: number;
    specialty: string;
    karma: number;
  }

  export interface IProfile {
    name: string;
    platform: string;
    handle: string;
    memberSince: string;
  }

  export interface IComment {
    id: string;
    author: string;
    timeAgo: string;
    body: string;
  }

  export interface ICategory {
    id: string;
    name: string;
    description: string;
    postCount: number;
    available: number;
  }

  export interface INavigationItem {
    icon: LucideIcon;
    text: string;
    color?: string;
    path?: string;
    action?: () => void;
  }

  export interface IPricingFeature {
    text: string;
  }

  export interface IPricingPlan {
    title: string;
    monthlyPrice: number;
    annualPrice: number;
    features: IPricingFeature[];
    ctaText: string;
  }

  export interface IPricingProps {
    heading: string;
    subheading: string;
    plans: IPricingPlan[];
    teamHeading: string;
    teamDescription: string;
    teamCtaText: string;
  }

  export interface IFAQItem {
    question: string;
    answer: string;
  }

  export interface INavItemProps {
    icon: React.ReactNode;
    text: string;
    color?: string;
    active?: boolean;
  }

  export interface ISettingsRowProps {
    id: string;
    title: string;
    description: string;
  }

  export interface IConfirmationDialogProps {
    isOpen: boolean;
    title: string;
    message: string;
    confirmLabel: string;
    onConfirm: () => void;
    onCancel: () => void;
  }

  export type IServerActionResult<Result> = Promise<
    | Result
    | {
        error: string;
      }
  >;
}
