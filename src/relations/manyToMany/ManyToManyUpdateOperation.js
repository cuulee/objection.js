import _ from 'lodash';
import UpdateOperation from '../../queryBuilder/operations/UpdateOperation';

export default class ManyToManyUpdateOperation extends UpdateOperation {

  constructor(builder, name, opt) {
    super(builder, name, opt);

    this.relation = opt.relation;
    this.owner = opt.owner;
  }

  onBeforeBuild(builder) {
    super.onBeforeBuild(builder);
    this.relation.selectForModify(builder, this.owner).modify(this.relation.filter);
  }
}
