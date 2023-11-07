import * as yup from 'yup';
import { validPostalCodeRegex } from './common';

const validUnitRegex = /^\d+-\d+$/;

export const propertyGroup = {
  RESEDENTIAL: 'Residential',
  COMMERCIAL: 'Commercial',
};

export const propertyTypeOptions = [
  {
    value: propertyGroup.RESEDENTIAL,
    label: propertyGroup.RESEDENTIAL,
    children: [
      {
        value: 'Condo',
        label: 'Condo',
        children: [
          {
            value: 'Condominium',
            label: 'Condominium',
          },
          {
            value: 'Apartment',
            label: 'Apartment',
          },
          {
            value: 'Walk-up',
            label: 'Walk-up',
          },
          {
            value: 'Executive Condominium',
            label: 'Executive Condominium',
          },
        ],
      },
      {
        value: 'Landed',
        label: 'Landed',
        children: [
          {
            value: 'Terraced House',
            label: 'Terraced House',
          },
          {
            value: 'Detached House',
            label: 'Detached House',
          },
          {
            value: 'Semi-detached House',
            label: 'Semi-detached House',
          },
          {
            value: 'Corner Terrace',
            label: 'Corner Terrace',
          },
          {
            value: 'Bungalow House',
            label: 'Bungalow House',
          },
          {
            value: 'Good Class Bungalow',
            label: 'Good Class Bungalow',
          },
          {
            value: 'Shophouse',
            label: 'Shophouse',
          },
          {
            value: 'Town House',
            label: 'Town House',
          },
          {
            value: 'Conservation House',
            label: 'Conservation House',
          },
          {
            value: 'Cluster House',
            label: 'Cluster House',
          },
        ],
      },
      {
        value: 'HDB',
        label: 'HDB',
        children: [
          {
            value: 'Standard(2,3,4,5 Room flat)',
            label: 'Standard(2,3,4,5 Room flat)',
          },
          {
            value: 'Jumbo',
            label: 'Jumbo',
          },
          {
            value: 'EA (Executive Apartment)',
            label: 'EA (Executive Apartment)',
          },
          {
            value: 'EM (Executive Maisonette)',
            label: 'EM (Executive Maisonette)',
          },
          {
            value: 'MG (Multi-Generation)',
            label: 'MG (Multi-Generation)',
          },
          {
            value: 'Terrace',
            label: 'Terrace',
          },
        ],
      },
    ],
  },
  {
    value: propertyGroup.COMMERCIAL,
    label: propertyGroup.COMMERCIAL,
    children: [
      {
        value: 'Retail',
        label: 'Retail',
        children: [
          {
            value: 'Mall Shop',
            label: 'Mall Shop',
          },
          {
            value: 'Shop',
            label: 'Shop',
          },
          {
            value: 'F&B',
            label: 'F&B',
          },
          {
            value: 'Medical',
            label: 'Medical',
          },
          {
            value: 'Other Retail',
            label: 'Other Retail',
          },
        ],
      },
      {
        value: 'Office',
        label: 'Office',
        children: [
          {
            value: 'Office',
            label: 'Office',
          },
          {
            value: 'Business / Science Park',
            label: 'Business / Science Park',
          },
        ],
      },
      {
        value: 'Industrial',
        label: 'Industrial',
        children: [
          {
            value: 'Light Industrial ',
            label: 'Light Industrial ',
          },
          {
            value: 'Factory',
            label: 'Factory',
          },
          {
            value: 'Warehouse',
            label: 'Warehouse',
          },
          {
            value: 'Dormitory',
            label: 'Dormitory',
          },
        ],
      },
    ],
  },
];

export const unitTypeOptionsResidential = [
  'Studio',
  '1 Bedroom',
  '2 Bedroom',
  '3 Bedroom',
  '4 Bedroom',
  '5 Bedroom',
  '6 Bedroom',
];

export const unitTypeOptionsCommercial = [
  'Lesser than 300sqft',
  '301sqft - 1000sqft',
  '1001sqft - 2000sqft',
  '2001sqft - 4000sqft',
  '4001sqft - 8000sqft',
  'Greater than 800sqft',
];

export const unitTypeOptions = [
  ...unitTypeOptionsResidential,
  ...unitTypeOptionsCommercial,
];

export const ownerRelationshipTypeOptions = {
  OWNER: "Owner",
  TENANT: "Tenant",
  OCCUPANT: "Occupant"
};

export const AddPropertyFields = {
  userId: 'user_id',
  unit: 'unit',
  block: 'block',
  country: 'country',
  buildingName: 'building_name',
  toilets: 'toilets',
  utilityRoom: 'utility_room',
  balcony: 'balcony',
  street: 'street',
  district: 'district',
  postalCode: 'postal_code',
  propertyType: 'property_type',
  unitType: 'unit_type',
  ownershipType: 'ownership_type',
  leasePeriod: 'lease_period',
  leaseStartDate: 'lease_start_date',
};

export const AddPropertySchema = (accountType) =>
  yup.object().shape({
    [AddPropertyFields.userId]:
      accountType === 'admin'
        ? yup
            .number()
            .required('Selecting a user is mandatory')
            .integer()
            .typeError('userId must be a number')
        : yup.number().integer().typeError('userId must be a number'),
    [AddPropertyFields.unit]: yup
      .string()
      .required('Unit is required')
      .matches(validUnitRegex, 'Please enter a valid unit'),
    [AddPropertyFields.block]: yup.string().required('Block cannot be empty'),
    [AddPropertyFields.country]: yup
      .string()
      .required('Country cannot be empty'),
    [AddPropertyFields.street]: yup.string().required('Street cannot be empty'),
    [AddPropertyFields.buildingName]: yup
      .string()
      .required('Building name cannot be empty'),
    [AddPropertyFields.postalCode]: yup
      .string()
      .required('Postal Code is required')
      .matches(validPostalCodeRegex, 'Please enter a valid postal code'),
    [AddPropertyFields.district]:
      accountType === 'admin'
        ? yup
            .number()
            .integer()
            .typeError('District must be an integer')
            .required('District is required')
        : yup
            .number()
            .transform((_, val) => (val ? Number(val) : null))
            .nullable(true)
            .typeError('District must be an integer'),
    [AddPropertyFields.propertyType]: yup
      .array()
      .required('Property type is required'),
    [AddPropertyFields.utilityRoom]: yup
      .boolean()
      .required('Utility room is required'),
    [AddPropertyFields.balcony]: yup.boolean().required('Balcony is required'),
    [AddPropertyFields.toilets]: yup
      .number()
      .integer()
      .typeError('Toilets must be an integer')
      .required('Toilets is required'),
    [AddPropertyFields.unitType]: yup
      .string()
      .required('Unit type is required')
      .when(AddPropertyFields.propertyType, {
        is: (propertyType) => propertyType?.[0] === propertyGroup.RESEDENTIAL,
        then: yup.string().oneOf(unitTypeOptionsResidential),
        otherwise: yup.string().oneOf(unitTypeOptionsCommercial),

      }),
    [AddPropertyFields.ownershipType]: yup
      .string()
      .required('Ownership type is required')
      .oneOf(Object.values(ownerRelationshipTypeOptions)),
    [AddPropertyFields.leaseStartDate]: yup.date().when('ownership_type', {
      is: ownerRelationshipTypeOptions.TENANT,
      then: yup.date().required('Lease start date is required.'),
    }),
    [AddPropertyFields.leasePeriod]: yup
      .number()
      .transform((_, val) => (val ? Number(val) : null))
      .nullable(true)
      .when('ownership_type', {
        is: ownerRelationshipTypeOptions.TENANT,
        then: yup
          .number()
          .integer()
          .min(1, 'Lease must be at least of 1 month')
          .typeError('Lease period must be an integer')
          .required('Lease period is required'),
      }),
  });

export const customPropertyStyles = {
  control: (styles, { isDisabled }) => ({
    ...styles,
    padding: '0px',
    margin: 'none',
    transition: ' all 0.3s ease-in-out',
    width: '100%',
    color: '#333',
    borderRadius: 'none',
    border: '1px solid #e8e8e8',
    backgroundColor: isDisabled ? '#ebebeb' : 'transparent',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #333',
    },
    '&:focused': {
      border: '1px solid #333',
    },
  }),
  option: (styles, state) => ({
    ...styles,
    background: state.isFocused ? '#ccc' : 'none',
    color: '#333',
  }),
  input: (styles) => ({
    ...styles,
    paddingBottom: 'none',
    paddingTop: 'none',
    margin: 'none',
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: '0px 8px',
    margin: 'none',
  }),
  menu: (provided) => ({ ...provided, zIndex: 9999 }),
};