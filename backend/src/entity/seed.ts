import { AccountEntity } from './account.lookup.entity';
import { ByEntity } from './by.lookup.entity';
import { Category1Entity } from './category1.lookup.entity';
import { Category2Entity } from './category2.lookup.entity';
import { ForEntity } from './for.lookup.entity';
import { PlannedEntity } from './planned.lookup.entity';
import { RatingEntity } from './rating.lookup.entity';
import { TransactionTypeEntity } from './transaction_type.lookup.entity';

export const BySeed: ByEntity[] = [
  { 
    id: 1, 
    name: 'Both', 
    isActive: true,
    sortOrder: 1
 },
 { 
   id: 2,
   name: 'Vishnu', 
   isActive: true,
   sortOrder: 2
},
{ 
   id: 3,
   name: 'Sumukhi', 
   isActive: true,
   sortOrder: 3
},
{ 
   id: 4,
   name: 'Other', 
   isActive: true,
   sortOrder: 4
},
];

export const ForSeed: ForEntity[] = [
   { 
     id: 1, 
     name: 'Both', 
     isActive: true,
     sortOrder: 1
  },
  { 
    id: 2,
    name: 'Vishnu', 
    isActive: true,
    sortOrder: 2
 },
 { 
    id: 3,
    name: 'Sumukhi', 
    isActive: true,
    sortOrder: 3
 },
 { 
    id: 4,
    name: 'Other', 
    isActive: true,
    sortOrder: 4
 },
 ];

export const TransactionTypeSeed: TransactionTypeEntity[] = [
   { 
     id: 1, 
     name: 'Income', 
     isActive: true,
     sortOrder: 1
  },
  { 
    id: 2,
    name: 'Expense', 
    isActive: true,
    sortOrder: 2
 },
 { 
    id: 3,
    name: 'Transfer Between Accounts', 
    isActive: true,
    sortOrder: 3
 },
 { 
    id: 4,
    name: 'Savings Push', 
    isActive: true,
    sortOrder: 4
 },
 { 
   id: 5,
   name: 'Savings Pull', 
   isActive: true,
   sortOrder: 5
},

];

export const PlannedSeed: PlannedEntity[] = [
   { 
     id: 1, 
     name: 'Planned', 
     isActive: true,
     sortOrder: 1
  },
  { 
    id: 2,
    name: 'Unplanned', 
    isActive: true,
    sortOrder: 2
 },
 { 
    id: 3,
    name: 'Expected', 
    isActive: true,
    sortOrder: 3
 },
 { 
    id: 4,
    name: 'Surprise', 
    isActive: true,
    sortOrder: 4
 },
 { 
   id: 5,
   name: 'Shock',
   isActive: true,
   sortOrder: 5
},

];

export const RatingSeed: RatingEntity[] = [
   { 
     id: 1, 
     name: '1', 
     isActive: true,
     sortOrder: 1
  },
  { 
    id: 2,
    name: '2', 
    isActive: true,
    sortOrder: 2
 },
 { 
    id: 3,
    name: '3', 
    isActive: true,
    sortOrder: 3
 },
 { 
    id: 4,
    name: '4', 
    isActive: true,
    sortOrder: 4
 },
 { 
   id: 5,
   name: '5',
   isActive: true,
   sortOrder: 5
},

];

export const Category1Seed: Category1Entity[] = [
   { 
     id: 1, 
     name: 'groceries', 
     isActive: true,
     sortOrder: 1
  },
  { 
    id: 2,
    name: 'Utility', 
    isActive: true,
    sortOrder: 2
 },
 { 
    id: 3,
    name: 'Outside Food', 
    isActive: true,
    sortOrder: 3
 },
 { 
    id: 4,
    name: 'Travel', 
    isActive: true,
    sortOrder: 4
 },
 { 
   id: 5,
   name: 'Rent',
   isActive: true,
   sortOrder: 5
},

];

export const Category2Seed: Category2Entity[] = [
   { 
     id: 1, 
     name: 'Wholefoods', 
     isActive: true,
     sortOrder: 1
  },
  { 
    id: 2,
    name: 'Patel Bothers', 
    isActive: true,
    sortOrder: 2
 }

];

export const AccountSeed: AccountEntity[] = [
   { 
     id: 1, 
     name: 'Vishnu BOA Red', 
     isActive: true,
     sortOrder: 1
  },
  { 
    id: 2,
    name: 'Sumukhi BOA Red', 
    isActive: true,
    sortOrder: 2
 }

];
