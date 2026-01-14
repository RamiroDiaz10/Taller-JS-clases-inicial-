const authUser = (req, res, next) => {
    console.log('Hola')
    res.json({ msg: ' HOla'});
    next;
}

export default authUser;