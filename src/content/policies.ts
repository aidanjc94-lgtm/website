import policiesData from '../../content/policies/policies.json';
import type { Policy } from './types';

export const policies: Policy[] = (policiesData as Policy[])
  .filter((policy) => policy.published)
  .sort((a, b) => a.order - b.order)
  .map((policy) => ({ ...policy, href: policy.documentLink, status: policy.policyCategory }));
