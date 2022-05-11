import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
query ($email: String, $password: String) {
    allUsers(condition: {
        email: $email
        password: $password
    }) {
        totalCount
        nodes {
            id
            name
            email
        }
    }
}`

export const GET_USER = gql`
query ($id: Int!) {
    userById(id: $id) {
        id
        name
        email
    }
}
`

export const GET_PRODUCTS = gql`
query {
    allProducts {
        totalCount
        pageInfo {
            endCursor
            hasPreviousPage
            hasNextPage
            startCursor
        }
        nodes {
            id
            name
            description
            image
            price
        }
    }
}`

export const GET_PRODUCT = gql`
query ($id: Int!){
    productById(id: $id) {
        id
        name
        price
        image
        description
    }
}`
