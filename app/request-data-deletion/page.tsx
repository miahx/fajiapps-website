import React from 'react';

const page = () => {
  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Request Data Deletion</h1>
      <p className="mb-4">
        If you wish to delete your account and all associated data from FajiBusiness, please send an email to
        <span className="font-semibold">{" "}<a href='mailto:contact.fajiapps@gmail.com' style={{textDecoration: 'underline'}}>contact.fajiapps@gmail.com</a></span> with your request. Our team will process your request as soon as possible.
      </p>
      <p className="mb-4">
        For your security, please include your registered email address and any relevant account information in your message so we can verify your identity.
      </p>
      <p>
        If you have any questions or concerns, feel free to contact us at the email above.
      </p>
    </div>
  );
};

export default page;
