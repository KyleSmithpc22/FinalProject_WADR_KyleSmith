import React from 'react';

import App from "../App";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

let e = React.createElement;

const Genposts = [
    {
      id: 1,
      title: "First Post Ever!",
      date: '4-7-2021',
      content: "First Post - this joke makes more sense if you used YouTube like 5 years ago"
    },

    {
      id: 2,
      title: "DONT BUY PRO ITS A SCAM",
      date: '4-8-2021',
      content: "Your funding an evil corp if you buy pro"
    },

    {
      id: 3,
      title: "Need META help",
      date: '4-7-2221',
      content: "Can someone help me with making a team plz? I dotn wanna buy pro."
    }
  ];

  const Bugposts = [
    {
      id: 1,
      title: "Bug can sign in",
      date: '4-7-2021',
      content: "Day 43 and you still cant sign into this damn website?? Lucky i never close my windows."
    }
  ];

export default class FormsPage extends React.Component {
    render() {

        return (
            <div>
                <Container>
                    <Router>
                        <div>
                            <ButtonGroup>
                            

                            <Button variant="outline-secondary">
                                <Link to="/Genposts">General</Link>
                            </Button>

                            <Button variant="outline-secondary">
                                <Link to="/Bugposts">Bug Report</Link>
                            </Button>

                            <Button variant="outline-secondary">
                                <Link to="/ProGenposts">Pro General</Link>
                            </Button>

                            
                            </ButtonGroup>
                            

                            <Switch>

                            <Route path='/Genposts'>
                                <Posts posts={Genposts} />
                            </Route>

                            <Route path='/Bugposts'>
                                <Posts posts={Bugposts} />
                            </Route>

                            <Route path='/ProGenposts'>
                                <Deny />
                            </Route>

                        

                            

                            </Switch>

                        </div>
                    </Router>
                    </Container>
            </div>
        )
    }
}

function Home() {
    return <h2>Home</h2>
  }
  
  function Deny() {
    
    return (

        <div>
            <p>Only Pro Pokemon Team Maker Users May Accces This Form</p>
            <p>Please Make Sure You Are Signed In</p>
        </div>
    );
  }
  
  function Posts({ posts }) {
    const match = useRouteMatch();
    const findPostById = (id) => 
      posts.filter((post) => post.id == id)[0];
  
    // return <h2>Posts</h2>
  
    return (
      <div>
        <h2>Posts</h2>
        
          {posts.map((post, index) => {
            return (
              <Alert key={index} variant="primary"> 
                <Link to={`${match.url}/${post.id}`}>
                  {post.title}
                </Link>
              </Alert>
            )
          })}
        
        <Switch>
          <Route
            path={`${match.path}/:postId`}
            render={(props) => (
              <Post
                {...props}
                data={findPostById(props.match.params.postId)}
              />
            )} 
          />
          <Route path={match.path}>
            <h3>Plz pick a post</h3>
          </Route>
        </Switch>
      </div>
    )
  }
  
  function Post(props) {
    const { data } = props;
    return data == undefined ? <h1>404 Not Found</h1> :(
      <Card>
        <Card.Header>{data.title}</Card.Header>
        <Card.Body>
          <Card.Subtitle>{data.date}</Card.Subtitle>
          <Card.Text>{data.content}</Card.Text>
        </Card.Body>
        
      </Card>
    )
  }
