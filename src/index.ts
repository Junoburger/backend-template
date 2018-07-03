import 'reflect-metadata'
import {createKoaServer} from 'routing-controllers'
import PageController from './pages/controller'
import UsersController from './users/controller'
import setupDb from './db'

const app = createKoaServer({
  controllers: [
    PageController,
    UsersController
  ]
})

setupDb()
  .then(_ =>
    app.listen(4000, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))


//   docker run -p 5432:5432 -e POSTGRES_PASSWORD=secret --name=postgres postgres
// docker run -it --rm --link postgres:postgres postgres psql -h postgres -U postgres