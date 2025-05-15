import { useSearchParams } from 'react-router-dom';
import { useCertService } from '@feature/Certification/useCertService.ts';
import { useChildCategory } from '@feature/Category/useCategoryService.ts';
import { isMainCategoryStore } from '@store/certification/certStore.ts';
import { ICategoryDataTypes } from '@type/category.ts';
import '../style/certTagView.scss';

const CertTagView = () => {
  const { moveToCertById } = useCertService();
  const [searchParams] = useSearchParams();
  const categoryId = Number(searchParams.get('categoryId')) || 0;
  const name = searchParams.get('categoryName') || '';
  const childCategory = useChildCategory(categoryId);
  const childCategoryData: ICategoryDataTypes[] | undefined = childCategory?.data;

  const { setIsMainCategory } = isMainCategoryStore();

  const onClickCertTag = (categoryId: number, name: string, id: number) => {
    if (categoryId && name && id) moveToCertById(categoryId, name, id);
    setIsMainCategory(false);
  };

  return (
    <div className="cert-tag-view">
      <div className="cert-tag-group">
        {childCategoryData?.map((item, index) => (
          <div
            key={index}
            className="cert-tag"
            onClick={() => {
              onClickCertTag(categoryId, name, item.id);
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertTagView;
