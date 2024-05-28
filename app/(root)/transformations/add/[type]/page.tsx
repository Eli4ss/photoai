import Header from '@/components/shared/Header'
import { transformationTypes } from '@/constants'

const AddTransformationTypePage = ({params: {type}}:
SearchParamProps) => {
  const tranformation = transformationTypes[type];
  
  return (
    <Header 
      title="Transformation Title"
      subtitle="Transformation SubTitle"/>
  )
}

export default AddTransformationTypePage