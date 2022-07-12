export class LookupItem {
  id: number;
  name: string;
  isActive: boolean;
  sortOrder: number;
  constructor(
    _id: number,
    _name: string,
    _isActive: boolean,
    _sortOrder: number,
  ) {
    this.id = _id;
    this.name = _name;
    this.isActive = _isActive;
    this.sortOrder = _sortOrder;
  }
}
