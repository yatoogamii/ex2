

export default (req: any, res: any, next: any) => {
  
  return res.status(200).json({ version: 1, space: req.session ? req.session.space : 'public', });
}