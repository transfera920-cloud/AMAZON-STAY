export interface ComparisonItem {
  dimension: string;
  traditional: string;
  modern: string;
  insight: string;
}

export interface ChecklistItem {
  id: string;
  category: 'team' | 'itinerary' | 'risk' | 'consensus';
  categoryLabel: string;
  label: string;
  description: string;
}

export interface DecisionNode {
  id: string;
  situation: string;
  classification: 'normal' | 'caution' | 'alert' | 'emergency';
  levelLabel: string;
  timeWindow: string;
  watchkeeperAction: string;
  recommendedStep: string[];
  communicationProtocol: string;
}

export interface MemberInfo {
  name: string;
  phone: string;
  emergencyContact: string;
  emergencyPhone: string;
  notes: string;
}

export interface WatchkeeperPlan {
  tripName: string;
  mountainRange: string;
  startDate: string;
  endDate: string;
  leaderName: string;
  leaderPhone: string;
  leaderSatellite: string;
  watchkeeperName: string;
  watchkeeperPhone: string;
  watchkeeperAlternatePhone: string;
  itineraryPlan: string;
  campSites: string;
  retreatRoutes: string;
  checkInPoints: string;
  overdueThresholdHours: number;
  emergencyTriggerThresholdHours: number;
  insurancePolicy: string;
  entryPermitNo: string;
  members: MemberInfo[];
}
