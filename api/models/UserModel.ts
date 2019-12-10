import {prop, Typegoose} from 'typegoose';


class Access extends Typegoose {
  
  @prop({default: false,})
  public blocked?: boolean;
}

export interface IUser extends Partial<User> {
  _id?: string;
}

class User extends Typegoose {
  
  @prop({default: new Date,})
  public dateCreation?: Date;
  
  @prop({required: true, index: true, unique: true,})
  public user?: string;
  
  @prop({default: "mdp",})
  public password?: string;
  
  @prop({})
  public access?: Access;
  
}

const UserModel = new User().getModelForClass(User, {
  schemaOptions: {collection: 'users'}
});

export default UserModel;