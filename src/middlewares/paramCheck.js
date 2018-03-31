const paramCheck = list => {
  return (req, res, next) => {
    const missingParams = list.filter(item => {
      // split if possible - if not, create new array
      const _item = item.includes(':') ? item.split(':') : [item, 'query']
      return !Object.keys(req[_item[1]]).includes(_item[0])
    })

    if (missingParams.length > 0) {
      return res.status(400).json({
        message: `Missing arguments (${missingParams[0]})`
      })
    }

    next()
  }
}

export default paramCheck
