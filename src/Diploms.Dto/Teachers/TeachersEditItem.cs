namespace Diploms.Dto
{
    public class TeacherEditDto
    {
        public int? Id {get;set;}
        public string FIO {get;set;}
        public int PositionId {get;set;}
        public int DepartmentId {get;set;}
        public int MaxWorkCount {get;set;}
    }
}