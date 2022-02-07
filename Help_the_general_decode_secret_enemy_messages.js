// It's not my way
device.decode = w =>[...Array(65)].reduce(pre => device.encode(pre), w);