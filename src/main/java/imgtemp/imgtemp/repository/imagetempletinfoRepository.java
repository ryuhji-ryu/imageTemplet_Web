package imgtemp.imgtemp.repository;
import imgtemp.imgtemp.entity.imagetempletinfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.repository.query.Param;

public interface imagetempletinfoRepository extends JpaRepository< imagetempletinfo , Integer> {

    public static final String  INSERT_DATA = "INSERT INTO imagetempletinfo (seq, templetnm,templetdetail,imagenm, imageurl)values ((select coalesce(MAX(i.seq), 0)+1 from imagetempletinfo i ) , :templetnm , :templetdetail, :imagenm, :imageurl)" ;

    @Transactional
    @Modifying
    @Query( value = INSERT_DATA , nativeQuery=true)
    public int insertDataPost(@Param("templetnm") String templetnm ,@Param("templetdetail") String templetdetail ,  @Param("imagenm") String imagenm , @Param("imageurl") String imageurl );
}
