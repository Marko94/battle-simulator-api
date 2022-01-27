import Army from './Army';

export enum BattleStatus {
  PREPARING= 'PREPARING',
  READY= 'READY',
  IN_PROGRESS= 'IN PROGRESS',
  FINISHED= 'FINISHED',
}

export default interface Battle {
  id?: string;
  status: BattleStatus;
  armies: Army[];
};
