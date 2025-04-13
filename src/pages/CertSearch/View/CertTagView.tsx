import useCategoryService from '@feature/Category/useCategoryService.ts';
import { ICategoryDataTypes } from '@type/category.ts';
import '../style/certTagView.scss';

const CertTagView = () => {
  const { getCertChildCategoryData } = useCategoryService();
  const certChildCategoryData: ICategoryDataTypes[] | undefined = getCertChildCategoryData?.data;

  return (
    <div className="cert-tag-view">
      <div className="cert-tag-group">
        {certChildCategoryData?.map((item, index) => (
          <div key={index} className="cert-tag">
            <div className="cert-tag-icon"></div>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertTagView;
