import UserModel, {IUser} from "../models/UserModel";


export default async (req: any, res: any, next: any) => {
  
  const fetchedUser: null | IUser = await UserModel.findOne({user: req.body.username, password: req.body.password});
  
  if(!fetchedUser) {
    return res.status(200).json({status: "nope"});
  } else {
    req.session.space = "private";
    req.session.user = fetchedUser.user;
    req.session.save((err: any) => {
      return res.redirect('/');
    });
  }
  
}