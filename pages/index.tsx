import { Col, Row } from 'antd';
import { CreateTweetForm } from '../components/CreateTweetForm'
import { Feed } from '../components/Feed';

export default () => (
  <Row>
    <CreateTweetForm />
    <Col md={{ span: 10, offset: 8 }}>
      <Feed />
    </Col>
  </Row>
);