import React from 'react';

interface DocumentSectionProps {
  documents: Document[];
}

interface Document {
  id: string;
  name: string;
  isSigned: boolean;
  link: string;
}

export const Document: React.FC<DocumentSectionProps> = ({ documents }) => {
  return (
    <>
      <p className='document_section_desc'>Once the following documents are signed, you'll be ready to get started</p>
      <div>
        {documents.map((document) => (
          <div key={document.id} className='document_wrapper'>
            <div className='doc_wrapper'>
              <div>{document.name}</div>
              {document.isSigned ? (
                <span className="green-tick"><i className="fa fa-check" aria-hidden="true"></i>
                </span>
              ) : (
                <span className="red-cross"><i className="fa fa-times" aria-hidden="true"></i>
                </span>
              )}
            </div>
            <a className='doc_link' href={document.link}>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Document;