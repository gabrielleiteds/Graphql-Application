import mongoose from 'mongoose'

const database = mongoose.connect(`mongodb+srv://${process.env.HOST}:${process.env.PASSWORD}@cluster0.ehqi8.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

export default database
