import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function SignInModal(
  { showSignIn, closeSignInModal, handleSubmit, formRef }: 
  { showSignIn: boolean, closeSignInModal: () => void, handleSubmit: () => void, formRef: React.RefObject<HTMLFormElement> }) {


  return (
    <>
    
        <Modal
            show={showSignIn}
            onHide={closeSignInModal}
            backdrop="static"
            keyboard={true}

        >
      
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form ref={formRef} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" />
                    <Form.Text className="text-muted">
                        We'll never share your name with anyone else.
                    </Form.Text>
                 </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                 </Form.Group>
            </Form>

        </Modal.Body>

        <Modal.Footer>
            <Button onClick={handleSubmit} variant="primary" type="submit">
                Sign in
            </Button>
        </Modal.Footer>
      
      </Modal>
    </>
    
  );
}

export default SignInModal;