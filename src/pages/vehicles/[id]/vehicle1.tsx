import {
  mdiAccount,
  mdiCar,
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
import { Vehicle } from 'interfaces/vehicles'
import { useState } from 'react'
import addNewVehicle from './addNewVehicle'
import vehicle from './vehicle'

const AddNewVehiclePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  
  const handleSubmit = async (vehicleData: Vehicle) => {
    try {
      setLoading(true);
      const response = await addNewVehicle(vehicleData);
      if (response.status === 201) {
        setLoading(false);
        console.log('a vehicle is saved')
        // showSuccessToast();
      } else {
        // if another status
      }

    } catch (error) {
      setLoading(false);
      console.log('a vehicle is NOT saved')
    }
  }


  return (
    <>
      <Head>
        <title>{getPageTitle('Vehicle')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton icon={mdiCar} title="Information about specific vehicle" main>
          <Button
            href="/vehicles/"
            //target="_blank"
            icon={mdiCar}
            label="Back to vehicle's overview"
            color="contrast"
            roundedFull
            small
          />
        </SectionTitleLineWithButton>

        {/*<CardBoxUser className="mb-6" />*/}

        <CardBox>
          <Formik
            initialValues={{
              vehicleId: -1,
              model: '',
              weightCapacity: '',
              fuelType: '',
              rangeWithCargo: '',
              rangeWithOutCargo: '',
              fuelConsumptionWithCargo: '',
              usefulArea: '',
              costOfDelivery: '',
              status: '',
            }}
            // onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            onSubmit={async (vehicleData) => handleSubmit(vehicleData)}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col flex-1">
                <CardBoxComponentBody>
                  <div className="grid grid-cols-2 gap-6">
                    <FormField
                      label="Model"
                      labelFor="model"
                      icons={[mdiAccount]}
                      //errors={[errors.model && touched.model ? errors.model : null]}
                    >
                      <Field name="model" id="model" placeholder={vehicle.model} />
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
                      labelFor="rangeWithOutCargo"
                      icons={[mdiAccount]}
                      errors={[errors.rangeWithOutCargo && touched.rangeWithOutCargo ? errors.rangeWithOutCargo : null]}
                    >
                      <Field name="rangeWithOutCargo" id="rangeWithOutCargo" placeholder="Range without Cargo" />
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
