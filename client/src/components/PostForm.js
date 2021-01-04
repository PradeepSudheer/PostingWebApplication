import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import gql from 'graphql-tag';



import { useForm } from '../util/hooks';






function PostForm(){

    // const {values, onChange, onSubmit} = useForm(createPostCallback,{
    //     body: ''
    // });

    // return (
    //     <Form>
    //         <h2>Create a Post</h2>
    //         <Form.Field>
    //             <Form.Input 
    //                 placeholder = 'Hi World!'
    //                 name = 'body'
    //                 onChange = {onChange}
    //                 value = {values.body}
    //             />
    //             <Button type = 'submit' color = 'teal'>
    //                 Submit
    //             </Button>
    //         </Form.Field>
    //     </Form>
    // )
}

// const CREATE_POST_MUTATION = gql`
// mutation createPost($body: String!){
//     createPost(body: )
// }
// `

export default PostForm;