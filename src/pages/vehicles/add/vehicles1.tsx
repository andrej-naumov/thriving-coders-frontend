import {
    mdiAccount,
    mdiGasStation,
    mdiGithub,
    mdiMail,
  } from '@mdi/js'
  import * as Yup from 'yup'
  import { Formik, Form, Field } from 'formik'
  import Head from 'next/head'
  import Button from 'components/Button'
  import Buttons from 'components/Buttons'
  import CardBox from 'components/CardBox'
  import CardBoxComponentBody from 'components/CardBox/Component/Body'
  import CardBoxComponentFooter from 'components/CardBox/Component/Footer'
  import FormField from 'components/Form/Field'
  import SectionMain from 'components/Section/Main'
  import SectionTitleLineWithButton from 'components/Section/TitleLineWithButton'
  import CardBoxUser from 'components/CardBox/User'
  import { useAppSelector } from 'src/stores/hooks'
  import { getPageTitle } from 'src/config'
  
  const AddNewVehiclePage = () => {
    const userName = useAppSelector((state) => state.main.userName)
    const userEmail = useAppSelector((state) => state.main.userEmail)
  
    const AddVehicleValidationSchema = Yup.object().shape({
      model: Yup.string()
        .min(2, 'model is too short!')
        .max(50, 'model is too long!')
        .required('model is required!'),
      weightCapacity: Yup.number()
        .min(2, 'Weight capacity is too small')
        .max(5000, 'Weight capacity is too big')
        .required('Weight capacity is required!'),
      fuelType: Yup.string().required('fuel type is required!'),
      rangeWithCargo: Yup.number()
        .min(10, 'Range with Cargo is too small')
        .required('Range with Cargo is required'),
      rangeWithoutCargo: Yup.number()
        .min(10, 'Range is too small')
        .required('Range without Cargo is required'),
      fuelConsumptionWithCargo: Yup.number()
        .min(10, 'Fuel consumption with Cargo is too small')
        .required('Fuel consumption with Cargo is required'),
      usefulArea: Yup.number().min(10, 'Useful area is too small').required('Useful area is required'),
      costOfDelivery: Yup.number()
        .min(2, 'Cost of delivery is too small')
        .required('Cost of delivery is required'),
      status: Yup.string().min(2, 'Status is too small').required('Status is required'),
    })
  
    return (
      <>
        <Head>
          <title>{getPageTitle('Vehicle')}</title>
        </Head>
  
        <SectionMain>
          <SectionTitleLineWithButton icon={mdiAccount} title="Vehicle" main>
            <Button
              href="https://github.com/justboil/admin-one-react-tailwind"
              target="_blank"
              icon={mdiGithub}
              label="Star on GitHub"
              color="contrast"
              roundedFull
              small
            />
          </SectionTitleLineWithButton>
  
          {/*<CardBoxUser className="mb-6" />*/}
  
          <CardBox>
            <Formik
              initialValues={{
                model: '',
                weightCapacity: '',
                fuelType: '',
                rangeWithCargo: '',
                rangeWithoutCargo: '',
                fuelConsumptionWithCargo: '',
                usefulArea: '',
                costOfDelivery: '',
                status: '',
              }}
              validationSchema={AddVehicleValidationSchema}
              onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
              {({ errors, touched }) => (
                <Form className="flex flex-col flex-1">
                  <CardBoxComponentBody>
                    <div className="grid grid-cols-2 gap-6">
                      <FormField
                        label="Model"
                        labelFor="model"
                        icons={[mdiAccount]}
                        errors={[errors.model && touched.model ? errors.model : null]}
                      >
                        <Field name="model" id="model" placeholder="Model" />
                      </FormField>
  
                      <FormField
                        label="Weight Capacity"
                        labelFor="weightCapacity"
                        icons={[mdiMail]}
                        errors={[errors.weightCapacity && touched.weightCapacity ? errors.weightCapacity : null]}
                      >
                        <Field name="weightCapacity" id="weightCapacity" placeholder="Weight Capacity" />
                      </FormField>
  
                      <FormField
                        label="Fuel Type"
                        labelFor="fuelType"
                        icons={[mdiGasStation]}
                        errors={[errors.fuelType && touched.fuelType ? errors.fuelType : null]}
                      >
                        <Field name="fuelType" id="fuelType" placeholder="Fuel Type" component="select">
                          <option value="">Please select fuel type</option>
                          <option value="electric">Electric</option>
                          <option value="diesel">Diesel</option>
                          <option value="gasoline">Gasoline</option>
                          <option value="hybrid">Hybrid</option>
                          <option value="natural_gas">Natural Gas</option>
                        </Field>
                      </FormField>
  
                      <FormField
                        label="Range with Cargo"
                        labelFor="rangeWithCargo"
                        icons={[mdiMail]}
                        errors={[errors.rangeWithCargo && touched.rangeWithCargo ? errors.rangeWithCargo : null]}
                      >
                        <Field name="rangeWithCargo" id="rangeWithCargo" placeholder="Range with Cargo" />
                      </FormField>
  
                      <FormField
                        label="Range without Cargo"
                        labelFor="rangeWithoutCargo"
                        icons={[mdiAccount]}
                        errors={[errors.rangeWithoutCargo && touched.rangeWithoutCargo ? errors.rangeWithoutCargo : null]}
                      >
                        <Field name="rangeWithoutCargo" id="rangeWithoutCargo" placeholder="Range without Cargo" />
                      </FormField>
  
                      <FormField
                        label="Fuel Consumption with Cargo"
                        labelFor="fuelConsumptionWithCargo"
                        icons={[mdiMail]}
                        errors={[errors.fuelConsumptionWithCargo && touched.fuelConsumptionWithCargo ? errors.fuelConsumptionWithCargo : null]}
                      >
                        <Field name="fuelConsumptionWithCargo" id="fuelConsumptionWithCargo" placeholder="Fuel Consumption with Cargo" />
                      </FormField>
  
                      <FormField
                        label="Useful Area"
                        labelFor="usefulArea"
                        icons={[mdiGasStation]}
                        errors={[errors.usefulArea && touched.usefulArea ? errors.usefulArea : null]}
                      >
                        <Field name="usefulArea" id="usefulArea" placeholder="Useful Area" />
                      </FormField>
  
                      <FormField
                        label="Cost of Delivery"
                        labelFor="costOfDelivery"
                        icons={[mdiMail]}
                        errors={[errors.costOfDelivery && touched.costOfDelivery ? errors.costOfDelivery : null]}
                      >
                        <Field name="costOfDelivery" id="costOfDelivery" placeholder="Cost of Delivery" />
                      </FormField>
  
                      <FormField
                        label="Status"
                        labelFor="status"
                        icons={[mdiAccount]}
                        errors={[errors.status && touched.status ? errors.status : null]}
                      >
                        <Field name="status" id="status" placeholder="Status" />
                      </FormField>
                    </div>
                  </CardBoxComponentBody>
                  <CardBoxComponentFooter>
                    <Buttons>
                      <Button color="info" type="submit" label="Submit" />
                      <Button color="info" type="reset" label="Reset" outline />
                    </Buttons>
                  </CardBoxComponentFooter>
                </Form>
              )}
            </Formik>
          </CardBox>
        </SectionMain>
      </>
    )
  }
  
  export default AddNewVehiclePage
  