import admin from 'firebase-admin';
const serviceAccount = {
    "type": "service_account",
    "project_id": "devfesthyd18",
    "private_key_id": "f0e52e3a92b9eb975c9a657a72693a3fbd1e4e05",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDX0do8szltNRA/\nU7TbJX7+xmQHjTAoB28hNFTn+FQqAcbq/kA6pLFcGOTaz8335wM+1rScFG2mlt1K\nlJvaMhyU6guPmn9NiK85eknWPmPNnKuNWMhUSIVL4063VU1aI+iSKrqsgUSaXax7\nsnEk9HDXs6cjA89PhmGeVXmqYjTLSAJqj0ykZfKGWMBL6uw0YQxZbePlurDpepQ2\nWv8T0X1ST61NYfw4vHfa5gPeWqBpTMPOFyy+5wHcCQCU1Zui8XmzN3MWuo4JspFO\nh+PIo4wB+ZXxq+JY6UfT6RZPowSuPQkO9nS4wILWiql/TtVRAwaKlnKO2IKKDl+U\nEiGzEO5bAgMBAAECggEARnsDbOBQ6D+0iyHQheLkatqqTycGK4Rl/++BrPHVtpQ2\n/IZEvoILY9rDXkwP5R4d2rcua2xmdMl/Ajyu+x5zZBRc6yxW16DELJ6pn1xnpn28\nLqBoZ9H5KhPVIJ0scjwY1yc6KFzc5RajXhAj0CA9+8txUUeMu9lUZuteHM0OlbXY\nfWWnONe7eqMQ2J4lrXnQiEztMng7bPNIb1jtWKtjMWr9jIXs92oJ2z+PEXccWD2v\n4sZnYybk/FA4u9hioAscOioamoKsq1LZBneBeeSavjEQynpWu9z3/28dRvGU4kfE\nDMZQwf2nrQ8UkEKVDMwU8rB/e7H5SDyCYsGNFn6hwQKBgQDuizyDx2TizIBqPZOj\npvMdwMvtqYNC7hT1s3A9QmFVC2tsJnvFjS7oJyRkNDNPKQyHy/1m6PD1hRqvIQx+\nyBpBjqRSbVOI/WwBagk6gSF+s71WmuL7oxJsy0N5p2ElWonM1RN8gL4esXUBkIMW\nQeamHvxXJkKwVJrNzeGwSiJ7GwKBgQDnnOm4yZd1PIVWY4RR4XgTNUiEEQ4on2ml\nP/7isT9nsRAtLrpq7LSnQaEfC54QjfTjoJC/xVHXypyDy9e5RD8CchdnTB6ZLoOx\nE0A02BOKZ4qlvpUqmYrnTRmB9YjSiTycpSBj3DCpQp0glmgeHDyY5FhcMz0ca29W\n9SrsvdFNwQKBgDPaZG8o2s9KMOfnNr6uPc7L6Ahjfrr/0eKO/Oj0EwBPmSxLOUB6\nLiYczBZUGossmyKxvwWtwSM9qc1D29l7WenCPgoE5dGzdNTh3duv0j4eiBvZU1nr\n2sd3b9V0AvQBuE6kSrYXrjwxywNqDHS8Io0d0zCGipyV54ixJkwR8WjdAoGAVeDM\nmIPG8OVb20hTC7k6OIUNOkrIoS9akLdF3vAxvlTc1qP44ySZZ1riTwyTszevkac7\nhJ+5VPX/Sq8OcddoNZPwMZD713hzw/iLWgy0UiFKO2KLFJyR8GmaB6Hu9YGFQ9/G\nPsCqGlhkwmyCdoepwFcKnEUzZ5I+WlPVcqp/LQECgYA03bEmbGm/naHaoqoB4snK\ntM1JX48ydbT8i6pIP12rHw1WBHjfgA3EAutOMHNSFtrHGD3n/lZpNMzPVBP0MV38\nk0gr9IBkZl9cmuLucNABxkRxhMNaylieSkeCEyUboIfK8DH/EPsOw77OqHtmnBsE\n0R04RWNzTlw7+jFFYGyghw==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-tpoyq@devfesthyd18.iam.gserviceaccount.com",
    "client_id": "118329555798679382816",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-tpoyq%40devfesthyd18.iam.gserviceaccount.com"
}


let firestore = null;
export function initializeFirebase() {
  return new Promise((resolve) => {

    const firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    firestore = admin.firestore();
    resolve(firebaseApp);
  });
}

export {
  firestore,
}
