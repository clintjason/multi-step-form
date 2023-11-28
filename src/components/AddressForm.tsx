import { FormWrapper } from "./FormWrapper"
import { Tooltip } from 'react-tooltip'
import { Document } from './Document'

type AddressData = {
  brandName: string
  brandType: string
  street: string
  city: string
  zip: string
  taxId: string
}

type Document = {
  id: string
  name: string
  isSigned: boolean
  link: string
}

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void,
  updateField: (field: Partial<AddressData>) => void,
  error: any,
  documents: Document[]
}

const docs = [
  {
    id: '1',
    name: 'Electronically sign the agreement(s)',
    isSigned: true,
    link: 'https://example.com/document1',
  },
];

const stepTitle: string = "Step 2"
const title: string = "Business Information"
const description: string = "Please enter information about your company."

const tip = <div className="tip">
  <p>Local: Brands with distribution in 3 divisions or less OR
    multiple divisionsbut a total of 150 stores or less
  </p>
  <p>National: Brands with distribution in 4 or more divisions or in more than 150 stores</p>
</div>
export function AddressForm({
  brandName,
  brandType,
  street,
  city,
  zip,
  taxId,
  error,
  documents,
  updateFields,
  updateField,
}: AddressFormProps) {
  return (
    <FormWrapper title={title} stepTitle={stepTitle} description={description}>
      <h3 className="fields_section_header minus_mt_15">General Information</h3>
      <div className="form_item">
        <label>Brand Name<span className="make_blue">*</span></label>
        <input
          required
          type="text"
          placeholder="Input Your Brand Name"
          value={brandName}
          onChange={e => updateField({ brandName: e.target.value })}
          onBlur={e => updateFields({ brandName: e.target.value })}
        />
        {error?.brandName && (
          <p role="alert" className="error_msg">{error?.brandName}</p>
        )}
      </div>
      <div className="form_item">
        <label>Brand Type<span className="make_blue" style={{marginRight: '10px'}}>*</span>
          <i id="my-anchor-element-id" className="fa fa-question-circle" aria-hidden="true"></i>
        <Tooltip
          place="right"
          anchorSelect="#my-anchor-element-id"
        >
          <div className="tip">
            <p>Local: Brands with distribution in 3 divisions or less OR
              multiple divisionsbut a total of 150 stores or less.
            </p>
            <p>National: Brands with distribution in 4 or more divisions or in more than 150 stores.</p>
          </div>
        </Tooltip>
        </label>
        <input
          required
          type="text"
          placeholder="Input Your Brand Type"
          value={brandType}
          onChange={e => updateField({ brandType: e.target.value })}
          onBlur={e => updateFields({ brandType: e.target.value })}
        />
        {error?.brandType && (
          <p role="alert" className="error_msg">{error?.brandType}</p>
        )}
      </div>
      <div className="form_item">
        <label>Street Address<span className="make_blue">*</span></label>
        <input
          required
          type="text"
          placeholder="Input Your Street Address"
          value={street}
          onChange={e => updateField({ street: e.target.value })}
          onBlur={e => updateFields({ street: e.target.value })}
        />
        {error?.street && <p role="alert" className="error_msg">{error?.street}</p>}
      </div>
      <div className="form_item">
        <label>City<span className="make_blue">*</span></label>
        <input
          required
          type="text"
          placeholder="Input City"
          value={city}
          onChange={e => updateField({ city: e.target.value })}
          onBlur={e => updateFields({ city: e.target.value })}
        />
        {error?.city && <p role="alert" className="error_msg">{error?.city}</p>}
      </div>
      <div className="form_item">
        <label>Zip Code<span className="make_blue">*</span></label>
        <input
          required
          type="text"
          placeholder="Input Zip Code"
          value={zip}
          onChange={e => updateField({ zip: e.target.value })}
          onBlur={e => updateFields({ zip: e.target.value })}
        />
        {error?.zip && <p role="alert" className="error_msg">{error?.zip}</p>}
      </div>
      <div className="form_item">
        <label>Tax ID Number<span className="make_blue">*</span></label>
        <input
          required
          type="text"
          placeholder="Input Tax ID Number"
          value={taxId}
          onChange={e => updateField({ taxId: e.target.value })}
          onBlur={e => updateFields({ taxId: e.target.value })}
        />
        {error?.taxId && <p role="alert" className="error_msg">{error?.taxId}</p>}
      </div>
      <div className='document_section'>
        <h3 className="fields_section_header">Documents</h3>
        <Document documents={documents} />
        <h3 className="fields_section_header">COI PDF Upload</h3>
        <Document documents={docs} />
      </div>
    </FormWrapper>
  )
}