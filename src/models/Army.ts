export default interface Army {
  armyName: string;
  startingHealth: number;
  currentHealth: number;
  attackStrategy: AttackStrategy;
}

export enum AttackStrategy {
  RANDOM= 'RANDOM',
  WEAKEST= 'WEAKEST',
  STRONGEST= 'STRONGEST',
}
